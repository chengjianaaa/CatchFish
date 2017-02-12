# -*- coding: utf-8 -*-
"""
Script to get a user's Facebook public profile information.
"""
import facebook
import urllib.parse
import urllib.request
import requests
import datetime
import FacebookProfile

class FacebookModule:
    APP_SECRET='4b768f8a218db2a17f34710b34d38c8f'
    APP_ID='1760577657593271'

    # 1. Register to be a Facebook developer here: https://developers.facebook.com/apps (App: CatchFish)
    # 2. Get token from Facebook here: https://developers.facebook.com/tools/explorer/
    # 3. Paste the token below
    
    def __init__(self,firstName=None,lastName=None,profileUrl=None):
        self.user_token="EAACEdEose0cBADUqOftb462r6Fzc6SW5hsX4YLltZCCu4iKTruZCVYeIQyfGLoeyZAQpdVtZC8ZASWMQwNvqcYZCSwSfy4LeI5APNvTK7eFRQkdwLnh0sxHBhNSxUTVZCM8d8LYoLZBYF2pQTqQ8YYtPwtzYZB7aEIm55eWk6rZAgSN8U3ZBRNIuLhYcqvll8twP8T4MnlawJF2eQZDZD"
        # Initialize FB graph API 
        self.fb = facebook.GraphAPI(self.user_token)        
        
        # Find profiles matching a given name
        if firstName != None and lastName != None:
            self.find_profiles_matching_name(firstName, lastName)
        elif profileUrl != None:
            # Get profile info given an FB url (e.g 'https://www.facebook.com/100015262392106)
            self.find_profile_from_url(profileUrl)
        
    def get_current_user_profile(self):
        profile = self.fb.get_object("me")
        #print(profile)
        return profile

    def get_matching_ids_by_user_name(self, user_name):
        people_by_name = self.fb.request('/search?q={}&type=user&fields=name'.format(user_name))
        #print(people_by_name)
        return people_by_name

    def get_profile_info_for_user(self, user_id):
        profile = self.fb.request('/{}'.format(user_id))
        photos = self.fb.request('/{}/photos'.format(user_id))
        #print(profile)
        return (profile, photos)

    def is_name_exact_match(self, given_first_name, given_last_name, first_name_match, last_name_match):
        return given_first_name == first_name_match and given_last_name == last_name_match

    def get_public_profile_url_from_source(self, app_scoped_url):
        response = requests.get(app_scoped_url)
        print(response.text)
    
    def initialize_info():
        info = {'first_name':None, 'last_name':None, 'name':None, 'link':None, \
        'gender':None, 'work':None, 'location':None, 'relationship_status':None}
        return info
        
    def find_profiles_matching_name(self, first_name, last_name):
        matching_users = self.get_matching_ids_by_user_name('{}+{}'.format(first_name, last_name))
        for user in matching_users['data']:   
            info = initialize_info()
            (info, photos) = self.get_profile_info_for_user(user['id'])        
            profile_url = info['link']
            # Convert datetime string to DateTime object
            date = info['updated_time'].split('+')
            updated_datetime = datetime.datetime.strptime(date[0], "%Y-%m-%dT%H:%M:%S")
            info['updated_time'] = updated_datetime.date()
            # TODO: Need to get public profile link from the app-scoped profile id
            if is_name_exact_match(first_name, last_name, info['first_name'], info['last_name']):
                print(info)
                profile = FacebookProfile(info['first_name'], info['last_name'], \
                                          info['name'], info['link'], info['gender'], \
                                          info['work'], None, info['location'], \
                                          info['relationship_status'])
                
    def find_profile_from_url(self, url):
        last_slash = url.rfind('/')
        user_id = url[last_slash:]
        profile = self.fb.request('/{}'.format(user_id))
        print(profile)
