import app from 'flarum/common/app';
import Widget, { WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import { extName } from '../../r';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import Link from 'flarum/common/components/Link';

interface TrendingDiscussionsResponse {
  data: TrendingDiscussion[];
}

interface TrendingDiscussion {
  type: 'discussions';
  id: string;
  attributes: {
    title: string;
    commentCount: number;
    participantCount: number;
    viewCount: number;
    createdAt: string;
    lastActivityAt: string;
    shareUrl: string;
    trendingScore: number;
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

    for (let index = 0; index < this.trends.length; index++) {
      const trend = this.trends[index];
      const isHot = index < 3;
      items.add(
        trend.id,
        <Link
          className={"liplum-trends-item " +
            (isHot ? "liplum-trends-item-hot" : "")
          }
          href={trend.attributes.shareUrl}
        >
          <span>{index + 1}.</span>
          <span style={{ marginLeft: '5px' }}>
            {trend.attributes.title}
          </span>
        </Link>,
        trend.attributes.trendingScore,
      );
    }

    return <div className="liplum-trends-container">
      {items.toArray()}
    </div>;
  }


  oncreate(vnode) {
    super.oncreate(vnode);
    this.fetchTrends();
  }

  async fetchTrends() {
    this.loading = true;
    const limit = app.forum.attribute<number | undefined>(`${extName}.limit`);
    const params: Record<string, number> = {};
    if (limit) params.limit = limit;
    try {
      const response = await app.request<TrendingDiscussionsResponse>({
        method: 'GET',
        url: app.forum.attribute('apiUrl') + '/trends/recent',
        params,
      });
      this.trends = response.data;
    } catch (error) {
      console.error('Error fetching trends:', error);
      this.loading = false;
      m.redraw();
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
}
