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
  'F4B8FFA8',
  '2A190EB0',
  '40F0D3A5',
  'EF680D52',
  'FFEAFA56',
  '9A9F3E2A',
  '3E421C22',
  '27A35817'
]

def importTest() {
  evaluate(new File("./constants.groovy"))
  def con = new Constants()
  println("constant is ${con} ${con.size()}")
}

return this;