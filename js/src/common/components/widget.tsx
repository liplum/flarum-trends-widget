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

    this.trends.forEach((trend) => {
      items.add(
        trend.id,
        <div className="liplum-trends-item">
          <Link href={trend.attributes.shareUrl}>
            {trend.attributes.title}
          </Link>
          <div className="liplum-trends-meta">
            {app.translator.trans(`${extName}.forum.widget.comments`, { count: trend.attributes.commentCount })}
          </div>
        </div>
      );
    });

    return <div className="liplum-trends-list">{items.toArray()}</div>;
  }


  oncreate(vnode) {
    super.oncreate(vnode);
    this.fetchTrends();
  }

  fetchTrends() {
    this.loading = true;
    app.request<TrendingDiscussionsResponse>({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + '/trends/recent',
    })
      .then((response) => {
        this.trends = response.data;
        this.loading = false;
        m.redraw();
      })
      .catch((error) => {
        console.error('Error fetching trends:', error);
        this.loading = false;
        m.redraw();
      });
  }
}
