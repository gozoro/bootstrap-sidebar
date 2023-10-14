# bootstrap-sidebar
Simple responsive sidebar for Bootstrap 3


Requirements
------------

+ jQuery version 1.7.0 and up


Installation
------------

```
composer require gozoro/bootstrap-sidebar
```

Usage
-----

Reference the plugin and jQuery:

```html
<script src='/resources/js/jquery.js' type='text/javascript'></script>
<script src='/resources/js/bootstrap-sidebar.js' type='text/javascript'></script>
<link href="/resources/css/bootstrap-sidebar.css" rel="stylesheet">
```
	


The example left sidebar layout:

```html
<style>
	.sidebar{width:300px;}
</style>
<div class="container-fluid">
	<div class="sidebar sidebar-lg sidebar-md">
		Static sidebar for large screen and medium screen.
		Slide panel for small screen and extra small screen.
	</div>
	<div class="content">...</div>
</div>
```
	


Other example left sidebar layout:

```html
<style>
	.sidebar.left{width:300px;}
</style>
<div class="container-fluid">
	<div class="sidebar left sidebar-lg">
		Static sidebar for large screen.
		Slide panel for medium screen and small screen and extra small screen.
	</div>
	<div class="content">...</div>
</div>
```
	


Example right sidebar layout:

```html
<style>
	.sidebar.right{width:300px;}
</style>
<div class="container-fluid">
	<div class="sidebar right sidebar-lg">
		Static sidebar for large screen.
		Slide panel for medium screen and small screen and extra small screen.
	</div>
	<div class="content">...</div>
</div>
```



Example left and right sidebars layout:

```html
<style>
	.sidebar.left{width:300px;}
	.sidebar.right{width:200px;}
</style>
<div class="container-fluid">
	<div class="sidebar left sidebar-lg sidebar-md sidebar-sm">
		Static sidebar for large screen and medium screen and small screen.
		Slide panel for extra small screen.
	</div>
	<div class="sidebar right sidebar-lg">
		Static sidebar for large screen.
		Slide panel for medium screen and small screen and extra small screen.
	</div>
	<div class="content">...</div>
</div>
```



Example fixed left and right sidebars layout:

```html
<style>
	.sidebar.left{width:300px;}
	.sidebar.right{width:200px;}
</style>
<div class="container-fluid">
	<div class="sidebar left fixed">...</div>
	<div class="sidebar right">...</div>
	<div class="content">...</div>
</div>
```



Example layout with sidebar open button and close button:

```html
<style>
	.sidebar.left{width:300px;}
	.sidebar.right{width:200px;}
</style>
<div class="container-fluid">
	<div class="sidebar left fixed">
		<button class="sidebar-close">close</button>
	</div>
	<div class="sidebar right fixed">
		<button class="sidebar-close">close</button>
	</div>
	<div class="content">
		<button class="sidebar-open left">open left sidebar</button>
		<button class="sidebar-open right">open right sidebar</button>
	</div>
</div>
```

