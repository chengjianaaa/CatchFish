# -*- coding: utf-8 -*-
import urllib
import re

from bs4 import BeautifulSoup

class FacebookInput:
    def __init__(self,firstName=None,lastName=None,fullName=None,fbUrl=None,gender=None,occupation=None,organization=None, location=None,relationshipStatus=None):
        if fbUrl:
            self.getFacebookInput(fbUrl,firstName,lastName,fullName,gender,occupation,organization,location,relationshipStatus)
        self.setFacebookInput()
    def getFacebookInput(self,fbUrl,firstName=None,lastName=None,fullName=None,fbUrl=None,gender=None,occupation=None,organization=None,location=None,relationshipStatus=None):
        #Parse the url, and get the values
        #html = open("C:\Work\Learning\CatchFish\\fbUrl.html",'r').read()
        html = urllib.urlopen(fbUrl).read()
        soup = BeautifulSoup(html,'lxml')
        occupation = re.findall('jobTitle":"([A-Z a-z .-]+)',soup.get_text())[0]
        location = re.findall('addressLocality":"([A-Z a-z .-]+,[A-Z a-z .-]+)',soup.get_text())[0].split(',')[1].lstrip()
        organization=re.findall('"Organization","name":"([A-Z a-z .-]+)',soup.get_text())[0]
        fullName = re.findall('"Person","name":"([A-Z a-z .-]+)',soup.get_text())[0] 
        firstName = fullName.split(' ')[0]
        lastName = fullName.split(' ')[1]
    def setFacebookInput(self,firstName,lastName,fullName=None,gender=None,occupation=None,organization=None,location=None,relationshipStatus=None):
        self.firstName = firstName
        self.lastName = lastName
        self.fullName = fullName
        self.gender = gender
        self.occupation = occupation
        self.organization = organization
        self.location = location
        self.relationshipStatus = relationshipStatus        