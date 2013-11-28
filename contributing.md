Work on a Bug or Feature
====

Motivation
----

These command-line innstructions are just meant to highlight the steps in the process.

Especially the creation of a clean pull request without rewriting
(= destroying) your development branch history is something I wanted to share.

Start Work on a Branch
----

```
git checkout -B BugOrFeature master
```

Make all the edits you needs.

Regularily rebase to pick up latest work:

```
git rebase origin master
```

Prepare Delivery Branch
----

Once you are happy with your contribution...

Create a delivery branch and merge a squashed version of your BugOrFeature commits to it.

```
git checkout master
git status # all clean
git checkout -B DeliverBugOrFeature master
git merge --squash BugOrFeature
git status # looks good
git commit # review and commit via emacs
# git log --graph --abbrev-commit --stat --pretty --decorate=full --branches
git push --all -v # push your work to your github repo
```

Open a `New Pull Request` and specify to merge from `DeliverBugOrFeature` to my `master` branch.

