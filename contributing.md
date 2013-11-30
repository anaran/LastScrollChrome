Motivation
----

A lot of effort is wasted between maintainers and contributors on reworking pull requests which are difficult to review and would clutter the upstream commit history.

Especially the creation of a clean pull request **without rewriting
(= destroying) your development branch history** is something I wanted to share.

These command-line instructions are just meant to highlight the steps in the process.

They assume you are working in a local git clone where origin is your github repo and upstream is my github repo.

Work on a Bug or Feature
----

Start working on a branch right away.

```
git remote add upstream https://github.com/anaran/LastScrollChrome.git
git checkout master
git pull upstream master
git checkout -B BugOrFeature master # Create and switch to the BugOrFeature branch starting at master.
```

Make all the edits you need to make, and test them, commit them frequently.

Regularly rebase to pick up latest work:

```
git pull upstream master
```

Prepare Delivery Branch
----

Once you are happy with your contribution...

Create a delivery branch and merge a squashed version of your BugOrFeature commits to it.

```
git checkout master
git pull origin master
git status # all clean
git checkout -B DeliverBugOrFeature master # Create and switch to DeliverBugOrFeature
git merge --squash BugOrFeature # merge to DeliverBugOrFeature, but don't commit!
git status # Verify all looks good
git commit # review and commit using your favorite EDITOR
# git log --graph --abbrev-commit --stat --pretty --decorate=full --branches (if you like)
git push --all -v # push your work to your github repo
```

Open `New Pull Request`
----

Finally, open a `New Pull Request` and specify to merge from `DeliverBugOrFeature` to my `master` branch.

