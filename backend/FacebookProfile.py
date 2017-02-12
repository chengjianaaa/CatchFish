# -*- coding: utf-8 -*-
"""
Created on Sat Feb 11 14:04:14 2017

@author: Shivva Subramani
"""
import re
import datetime
from bs4 import BeautifulSoup
   
class FacebookProfile:
    def __init__(firstName=None,lastName=None,fullName=None,profileUrl=None,gender=None,occupation=None,organization=None, location=None,relationshipStatus=None, fbInput=None):
        self.firstName = firstName
        self.lastName = lastName
        self.profileUrl = profileUrl
        self.facebookInput = fbInput
        self.fullName = ''
        self.friendsUrlList = []
        self.homePageData = None
        self.aboutPageData = None
        self.friendsPageData = None
        self.contactInfoData = None
        self.photosPageData = None
        self.lastUpdated = None
        self.gender = None
        self.ignoreProfile=False
        self.numberOfPhotos = 0
        self.fakenessProbability = 0
    def getFacebookProfileData(self):            
        # Return dictionary of everything in __init__
        #html = urllib.urlopen(self.friendsPageUrl).read()        
        #html = open("C:\Work\Learning\CatchFish\\fbUrl.html",'r').read()
        soup = BeautifulSoup(self.homePageData,'lxml')
        pass
    def setGender(self):
        soup = BeautifulSoup(self.contactInfoData,'lxml')
        if 'Male' in self.contactInfoData:
            self.gender = 'male'
        else:
            self.gender = 'female'            
    def validateGender(self):
        if fbInput.gender:
            if fbInput.gender.lower() != self.gender():
                self.ignoreProfile = True
    def validateLocation(self):
        if fbInput.location:
            if fbInput.location.upper() != self.location.upper():                
                self.ignoreProfile = True            
    def validateRelationshipStatus(self):pass
    def validateOrganization(self):
        if fbInput.organization:
            if fbInput.organization.upper() != self.organization.upper():
                self.ignoreProfile = True             
    def getFriendsUrlList(self,firstLevelConn=False):
        #html = urllib.urlopen(self.friendsPageUrl).read()
        #html = open("C:\Work\Learning\CatchFish\\fb_friends.html",'r').read()
        soup = BeautifulSoup(self.friendsPageData,'lxml')
        initialFriendsList = (soup.findAll('div',attrs={'data-testid':'friend_list_item'}))
        if len(initialFriendsList) < 25:
            self.fakenessProbability += 20
        else:
            # If it is first level connection, we don't want to 
            # query second level connections
            if firstLevelConn == True:
                return
            """Choose atmost 25 friends and run a check on them to get 
            their fakeness probability aggregate"""                
            for i in range(0,25):
                self.friendsUrlList.append((initialFriendsList[i].find_all('a'))[0].get('href',None))
                friendsFBProfile = FacebookProfile((initialFriendsList[i].find_all('a'))[0].get('href',None))
                authenticateFirstLevelConnections()
    def getNumberofPhotos(self):
        #soup = BeautifulSoup(open("C:\Work\Learning\CatchFish\\fb_photos.html",'r').read(),'lxml')
        soup = BeautifulSoup(self.photosPageData,'lxml')
        if len(re.findall('Profile Pictures',soup.get_text())) < 3:
            self.fakenessProbability += 20
    def getLastUpdatedTime(self):
        ''' If the profile was not updated for more than 3 months, it 
        increases fakenes'''
        if datetime.now() - sel.updatedTime > 3:
            self.fakenessProbability += 20
                        
    def authenticateFacebookProfile(self):
        pass
          
    def authenticateFirstLevelConnections(self):
        pass