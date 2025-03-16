import app from 'flarum/common/app';
import Widget, { WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import { extName } from '../../r';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import Link from 'flarum/common/components/Link';

interface TrendingDiscussion {
  type: 'discussions';
  id: string;
  attributes: {
    title: string;
    commentCount: number;
    createdAt: string;
    lastActivityAt: string;
    shareUrl: string;
  };
  relationships: {
    user: {
      data: {
        type: 'users';
        id: string;
        attributes: {
          username: string;
        };
      };
    };
  };
}

interface TrendingDiscussionsResponse {
  data: TrendingDiscussion[];
}

interface TrendsWidgetAttrs extends WidgetAttrs {

}

export default class TrendsWidget extends Widget<TrendsWidgetAttrs> {
  loading: boolean = true;
  trends: TrendingDiscussion[] = [];
  className(): string {
    return 'liplum-trends-widget'
  }

  icon(): string {
    return "fas fa-fire-alt"
  }

  title(): string {
    return app.translator.trans(`${extName}.forum.widget.title`) as string
  }

  content() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    if (!this.trends || this.trends.length === 0) {
      return app.translator.trans(`${extName}.forum.widget.empty`);
    }

    const items = new ItemList();

    this.trends.forEach((trend, index) => {
      items.add(
        trend.id,
        <Link
          href={trend.attributes.shareUrl}
          style={{
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          {`${index + 1} ${trend.attributes.title}`}
        </Link>
      );
    });

    return <div>
      {items.toArray()}
    </div>;
  }


  oncreate(vnode) {
    super.oncreate(vnode);
    this.fetchTrends();
  }

  async fetchTrends() {
    this.loading = true;
    const recentDays = app.forum.attribute<number | undefined>(`${extName}.recentDays`);
    const limit = app.forum.attribute<number | undefined>(`${extName}.limit`);
    const hotSpotHours = app.forum.attribute<number | undefined>(`${extName}.hotSpotHours`);
    const params: Record<string, number> = {};
    if (recentDays) params.recentDays = recentDays;
    if (limit) params.limit = limit;
    if (hotSpotHours) params.hotSpotHours = hotSpotHours;
    try {
      const response = await app.request<TrendingDiscussionsResponse>({
        method: 'GET',
        url: app.forum.attribute('apiUrl') + '/trends/recent',
        params,
      });
      this.trends = response.data;
    } catch (error) {
      console.error('Error fetching trends:', error);
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
}
