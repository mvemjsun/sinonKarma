def showBranchName() {
  echo "Branch name in loaded script is ${GIT_BRANCH}"
}

def showParams(String params) {
  echo "Passed parameter ${params}""
}
return this;