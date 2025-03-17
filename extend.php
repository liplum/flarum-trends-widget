<?php

namespace Liplum\HtmlWidget;

use Flarum\Extend;

return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js')
    ->css(__DIR__ . '/less/forum.less'),

  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js'),

  new Extend\Locales(__DIR__ . '/locale'),

  (new Extend\Settings)
    ->default('liplum-trends.limit', 5)
    ->serializeToForum(
      'liplum-trends-widget.limit',
      'liplum-trends-widget.limit',
    ),
];
