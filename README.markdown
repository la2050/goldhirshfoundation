
# Goldhirsh Foundation

This is a website for the Goldhirsh Foundation.

https://goldhirshfoundation.org

* [How to make changes](#how-to-make-changes)
* [How to add a blog post](#how-to-add-a-blog-post)
* [How to add an image](#how-to-add-an-image)
* [How to see a preview of your changes](#how-to-see-a-preview-of-your-changes)
* [How to develop locally](#how-to-develop-locally)
* [Handy guides](#handy-guides)

## How to make changes

The website is published with [GitHub Pages](https://pages.github.com) and the files are generated with [Jekyll](https://jekyllrb.com).

As you make changes and commit/push them to GitHub, the [website](https://goldhirshfoundation.org) will automatically update.

For example, if you [edit the LA2050 page](https://github.com/la2050/goldhirshfoundation/edit/master/la2050.markdown) on GitHub, and then press the “Commit changes” button–you should see your changes on the [LA2050 page](https://goldhirshfoundation.org/la2050/) of the website within a few minutes.

## How to add a blog post

*The easist way to add a blog post is to use [Siteleaf](https://www.siteleaf.com). If you make a change in Siteleaf, it will appear on the [staging website](#how-to-see-a-preview-of-your-changes). (Megan and Jim have a Siteleaf account.)*

![blog](https://user-images.githubusercontent.com/926616/48216016-78410180-e338-11e8-940c-52ae3c4d0944.png)

![blog-post](https://user-images.githubusercontent.com/926616/48216238-f7363a00-e338-11e8-8695-74cdd813762e.png)

*You can also follow these steps, to add a blog post using GitHub…*

1. Open the [\_posts](https://github.com/la2050/goldhirshfoundation/tree/master/_posts) folder.

2. Press the `create new file` button: https://github.com/la2050/goldhirshfoundation/new/master/_posts

3. Name the file using today‘s date (or whichever date you’d like to use as the published date) along with the name of the post. It’s best to use lowercase letters and dashes instead of spaces for your filename. For example:
```
2018-07-09-and-the-winners-are.markdown
```

3. Copy and paste this text into your new post, and then change it to your liking:
```
---
title: Enter your title here
excerpt: This is a single paragraph of text that will appear on the blog page
  https://goldhirshfoundation.org/blog/
  About three to five lines of text will be best. You can put the whole excerpt on a
  single line or multiple lines (like this example). Each line after the first one
  should be preceded by two spaces.
author: Tara Roth
published: true
---

Your first paragraph of text can go here.

## And here’s an example of a title

To see more examples, try opening some of the other posts, or read the markdown guide:
https://guides.github.com/features/mastering-markdown/
```

*You can also use one of the other [posts](https://github.com/la2050/goldhirshfoundation/tree/master/_posts) as a starting point.*

4. Press the `Commit changes` button

Your new blog post should appear on [blog page](https://goldhirshfoundation.org/blog/) within a few minutes.

## How to add an image

*The easist way to add an image is to use [Siteleaf](https://www.siteleaf.com). If you make a change it Siteleaf, it will appear on the [staging website](#how-to-see-a-preview-of-your-changes). (Megan and Jim have a Siteleaf account.)*

![uploads](https://user-images.githubusercontent.com/926616/48215303-d240c780-e336-11e8-9f6b-24fa6d3781f1.png)

*Here are more details, if you want to add an image using GitHub instead…*

If you want to add an image (or any file) to the website, you can upload it to one of the folders on GitHub.

The [uploads folder](https://github.com/la2050/goldhirshfoundation/tree/master/_uploads) might be a good choice, if you’re unsure where to put a file.

Once you’ve chosen a folder, follow these steps:

1. Press the `Upload files` button

2. Use the uploader to upload your files

3. Press the `Commit changes` button

It’s best to use lowercase letters and dashes instead of spaces for your filename. For example: `womens-march-la.jpg`.

Once your file has been uploaded it be available at a web address that corresponds to the folder and filename that you chose. For example:

```
/uploads/womens-march-la.jpg
```

To use this on the website, you can create an image with [markdown](https://guides.github.com/features/mastering-markdown/):

```
![Women’s March LA](/uploads/womens-march-la.jpg)
```

## How to see a preview of your changes

If you’d like to see how your changes will look on the website before making them public, you can work in the [staging branch](https://github.com/la2050/goldhirshfoundation/tree/staging)–a copy of the website files, that’s published at https://staging.goldhirshfoundation.org

![staging](https://user-images.githubusercontent.com/926616/47131296-bcb61180-d252-11e8-90e0-56a2e7552163.png)

You can make edits in the staging branch and commit them just as you would normally. They’ll automatically appear on the staging website within a few minutes.

Once you’re happy with how your changes look on the staging website, you can copy them over to the [public website](https://goldhirshfoundation.org) (the `master` branch) using a pull request. Here are the steps:

1. Press the “new pull request” button.

https://github.com/la2050/goldhirshfoundation/pull/new/staging

![1-new-pull-request-button](https://user-images.githubusercontent.com/926616/47131298-bde73e80-d252-11e8-8cd6-f64703af5c2b.png)

2. Write a title for your pull request (this is optional).

3. Press the “create pull request” button.

4. And then, press the “merge pull request” button.

5. And lastly, press the “confirm merge” button.

![3-merge-pull-request](https://user-images.githubusercontent.com/926616/47131302-c0499880-d252-11e8-9393-75dcfcd49650.png)

## How to develop locally

If you want to see a preview of your changes while you work, you can [run a Jekyll server](https://jekyllrb.com) on your local machine. [Installing Ruby and Jekyll](https://jekyllrb.com/docs/installation/) is a good place to start.

After you have Jekyll installed, you can clone this project with [Git](https://git-scm.com) or [GitHub Desktop](https://desktop.github.com)…

```
git clone https://github.com/la2050/goldhirshfoundation.git
```

And then start running the Jekyll application like this...

```
jekyll serve
```

## Handy guides

* [Markdown](https://guides.github.com/features/mastering-markdown/)
* [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
* [YAML Checker](http://www.yamllint.com)
* [Liquid](https://shopify.github.io/liquid/)
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Jekyll](https://jekyllrb.com/docs/home/)
* [GitHub Pages](https://pages.github.com)
* [Siteleaf](https://www.siteleaf.com)
