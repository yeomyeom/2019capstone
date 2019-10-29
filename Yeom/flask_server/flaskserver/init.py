from flask import Flask, render_template, url_for
from flask import request
import random

app = Flask(__name__)

@app.route('/')
def template_test():
      #url 받아서 파싱
      #파싱된 파일들을 가지고 점수 출력
      #해당 점수를 가지고 html 코드 생성
      #createhtml()
      status = random.randrange(1,2)
      if(status == 1):
            return render_template('good.html')
      else:
            return render_template('bad.html')
            

def createhtml():
      f = open("./templates/index.html",'w')
      f.close()

if __name__=="__main__":
      app.run()
