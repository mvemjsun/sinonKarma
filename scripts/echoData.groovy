import groovy.transform.Field

def showBranchName() {
  echo "Branch name in loaded script is ${GIT_BRANCH}"
}

def showParams(String params) {
  echo "Passed parameter ${params}"
}

def returnValue() {
  return "Hello world"
}

@Field
def ids = 
[
  '17711467',
  '7D089856',
]

@Field
def id2 = 
[
  '17711467'
]

@Field
def appIds = [nowTvProdDev: ids, nowTvE2E: id2]


return this;