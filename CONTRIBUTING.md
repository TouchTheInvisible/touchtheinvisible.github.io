# How to Contribute

There are a few different ways that you can contribute, you can add additional material to an existing page, create a new page/model, or work on dev material! We'll walk you through how to do each one below

## Using CMS - NetlifyCMS

Not good with code/markdown? Want to use a [WYSIWYG editor](https://en.wikipedia.org/wiki/WYSIWYG)(What-You-See-Is-What-You-Get; e.g. Microsoft Word)?

Touch The Invisible utilizes NetlifyCMS, an open source Graphical User Interface for contributors to easily contribute their knowledge without any prior knowledge in code or techonology. This is by far the easiest way to edit content on the website.

To use the NetlifyCMS, please email the webmaster - (Shinwoo Kim)[mailto:shinwookim@pitt.edu] - for access.

OR 

## Using Markdown
Model pages(or 'posts') are stored in the '[_posts](/_posts)'folder of the root directory. Each post is stored as a markdown file. Click on a existing file to edit OR create a new markdown file to create a new post.

### For New Posts...
1. files must follow the naming scheme: YYYY-MM-DD-TITLE.md
2. Top of the Markdown file must contain the following graymatter
```
---
layout: model
title: Your Post Title
date: 2022-03-25T03:03:33.659Z
preview: /assets/img/1EUQ+1GAX-Aminoacyl%20tRNA%20Synthetase/1EUQ-Glutaminyl%20tRNA%20Synthetase_RibbonWithGlutamine.png
modelfile: https://raw.githubusercontent.com/TouchTheInvisible/TouchTheInvisible.github.io/master/assets/models/1EUQ%2B1GAX-Aminoacyl%20tRNA%20Synthetase/1EUQ-Glutaminyl%20tRNA%20Synthetase_RibbonWithGlutamine.dae
figuresheet: /assets\figure_sheets\1EUQ_1GAX-Aminoacyl tRNA Synthetase_Photosheet.pdf
infographic: /assets\infographics\tRNA synthetase_Infographics.pdf
---
```
+ Must have `---` in front and back of greymatter
+ layout: model should be kept as-is. DO NOT CHANGE
+ title: should be your title(matching from file name), duh
+ date: the date your writing the post, again duh
+ preview: image preview of the model
+ modefile: link to .dae file (MUST USE RAW.GITHUBUSERCONTENT.COM/... FORMAT)
+ Figuresheet: If one does not exist, omit tag
+ infographic: If one does not exist, omit tag
