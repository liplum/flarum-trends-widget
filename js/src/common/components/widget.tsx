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
        <div style={{
          marginBottom: '10px',
          padding: '10px',
          borderBottom: '1px solid #eee',
          // Use flexbox for layout
          display: 'flex',
          // Distribute space between title and comments
          justifyContent: 'space-between',
          // Align items vertically in the center
          alignItems: 'center',
        }}
        >
          <Link href={trend.attributes.shareUrl}
            style={{
              fontWeight: 'bold'
            }}
          >
            {trend.attributes.title}
          </Link>
          <div style={{
            fontSize: '0.8em',
            color: '#888',
            marginTop: '5px'
          }}>
            {trend.attributes.commentCount}
          </div>
        </div>
      );
    });

    return <div style={{
      padding: '10px'
    }}>
      {items.toArray()}
    </div>;
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
