from flask import Flask, render_template, request, url_for, redirect, session

obj = Flask(__name__)

# Corrected users dictionary format
users =["admin","hari"]
passwords= ["admin","hari"]

@obj.route("/")
def home():
    return render_template("login.html")

@obj.route("/checkInfo", methods=['POST', 'GET'])
def checkInfo():
    values = request.form['redirect']
    if values == 'olduser':
        username = request.form['username']
        password = request.form['password']
        if username in users and password in passwords:
            return redirect(url_for('webpage'))
        else:
            return "<h1>you don't have accont</h1>"
    elif values == 'newuser':
        return redirect(url_for('Newuser'))

@obj.route("/Newuser")
def Newuser():
    return render_template("register.html")

@obj.route("/webpage")  
def webpage():
    return render_template("home.html" , user=users ,password=passwords)  

@obj.route("/info")
def info():
    return render_template("info.html")

@obj.route("/register", methods=['POST','GET'])
def register():
    username = request.form['username']
    password = request.form['password']
    users.append(username)
    passwords.append(password)
    return render_template("login.html")


if __name__ == '__main__':
    obj.run(debug=True)
