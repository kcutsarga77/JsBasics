// git -> vcs
// gitHub / gitLab / bitbucket

// repository [code + .git]
// local repository
// remomte repository

// config
// git config --global --list
// git config --global user.name "<name>"
// git config --global user.email "<email>"
// git config --global init.defaultbranch main
// git config --global pull.rebase false

// initialize empty local repository
// git init

// working flow
// working directory -> staging area   ->   local repo [version] -> remote repository
// change                ready state           commit/version        
// change                git add                 git commit          git push

// git status -> U,A,M
// git add <file_path>   // staging area
// git add
// git commit -m "<commit_message>"

// git log
// git log --oneline
// git log main..scope
// git log --oneline origin/main..main

// remote
// git remote -v
// git remote add origin <link>
// git remote remove origin

// branching
// git branch
// git branch <branch name>
// git switch <branch name>

// merging
// git merge <branch name>

// diff
// git diff scope..main
// git diff --name-only scope..main

// todo: stash, revert, reset, rebase, cherry-pick

// git stash -m "stash message"
// git stash pop
// git stash apply stash@{n} 
// git stash drop stash@{n}
// git stash clear


// revert
// a -> b -> c -> d -> e
// a -> b -> c -> d -> e -> d'

// reset
// a -> b -> c -> d -> e
// a -> b -> c -> d


// reset
// git reset <commit_id>
// git reset Head~n => 1 // default mixed
// options
// --soft
// git reset --soft Head~n => 1 -> staged
// --mixed
// git reset --mixed Head~n => 1 -> wd
// --hard
// git reset --hard Head~n => 1 -> delete

// revert
// git revert <commit_id>
// git revert Head~n => n=1,2,..

// main a -> b -> c
// feature e -> f -> g
// git cherry pick g  -> a -> b -> c -> g

// git rebase main
// main a -> b -> c
// feature e -> f -> g

// todo: git pull, git fetch, git clone

// gitHub
// pull request
