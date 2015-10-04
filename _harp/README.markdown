nuWIT website
===========================

This is the repository where the code for our website lives.

Useful References
======================

* [Harp](http://harpjs.com/docs/)
* [Jade](http://jade-lang.com/reference/)
* Markdown: [by Daring Fireball](http://daringfireball.net/projects/markdown/syntax)
* [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

Directory Structure
==================

The source code is all in the `/_harp/` folder. These are the files that can be
edited: anything in the root directory is compiled by harp and changes here will
get overwritten on each compile.

Local Development
==================================

You'll need [harp installed](http://harpjs.com/docs/environment/install)
(v.0.17.0) on your machine/development environment. Harp requires node,
so probably should grab [Node Version Manager](https://github.com/creationix/nvm)
before.

Clone this repository onto your machine:
`git clone https://github.com/HackBeanpot/www.git`

From the top level of the www directory, run:
`harp server _harp`

The site will now be running locally, and you can see it in your browser at
`localhost:9000`.

Development Workflow
====================

The branch `gh-pages` is PRODUCTION; do not develop and do risky things there.
Things pushed to the html/css/whatever else files in the root directory on this
branch are LIVE. LIVE I SAY.

*MAKE A BRANCH*

Please write useful commit messages. Commit messages should briefly summarize
behavior changes for specified areas. For example, "Updated typography for
Schedule Page" is far better than "update css/style.scss"

Many people commit Super Freaking Often while they develop. If you do that, know
that it saves your reviewer a lot of time if your commits are reorganized
(squashed) before you open your PR. Commits should reflect "full thoughts" and
"progress chunks" in the codebase. So if you did lots of back-and-forth
changes while you were making your design decisions, squash that.
[More information.](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)

Then open a PR when you think your work is ready. Get someone to
look over your PR before you  merge, especially if it's a big change.

Style Guide
===========

Spaces, not tabs.
Each "tab" is 2 spaces.
And try to keep to 80char lines.
