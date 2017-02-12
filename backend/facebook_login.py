# -*- coding: utf-8 -*-
"""
Module to log in to Facebook using FB app developer's credentials.
"""
import robobrowser

class Facebook(robobrowser.RoboBrowser):
    url = 'https://facebook.com'
    def __init__(self, email, password):
        self.email = email
        self.password = password
        super().__init__()
        self.login()

    def login(self):
        self.open(self.url)    
        login_form = self.get_form(id='login_form')
        login_form['email'] = self.email
        login_form['pass'] = self.password
        self.submit_form(login_form)
        
browser = robobrowser.RoboBrowser(
        history=True,
        user_agent='Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0'
    )
fb = Facebook('catchfish222@gmail.com', 'catchfish222')
