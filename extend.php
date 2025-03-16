<?php

namespace Liplum\HtmlWidget;

use Flarum\Extend;

return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js'),

  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js'),

  new Extend\Locales(__DIR__ . '/locale'),

  (new Extend\Settings)
    ->serializeToForum(
      'liplum-trends-widget.recentDays',
      'liplum-trends-widget.recentDays',
    )->serializeToForum(
      'liplum-trends-widget.limit',
      'liplum-trends-widget.limit',
    )->serializeToForum(
      'liplum-trends-widget.hotSpotHours',
      'liplum-trends-widget.hotSpotHours',
    ),
];
