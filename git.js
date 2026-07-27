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
// git add .
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