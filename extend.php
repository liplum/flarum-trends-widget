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
      'liplum-html-widget.innerHtml',
      'liplum-html-widget.innerHtml',
    )->serializeToForum(
      'liplum-html-widget.title',
      'liplum-html-widget.title',
    )->serializeToForum(
      'liplum-html-widget.icon',
      'liplum-html-widget.icon',
    ),
];
