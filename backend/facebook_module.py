# -*- coding: utf-8 -*-
"""
Script to get a user's Facebook public profile information.
"""
import facebook
import urllib.parse
# 1. Register to be a Facebook developer here: https://developers.facebook.com/apps (App: CatchFish)
# 2. Get token from Facebook here: https://developers.facebook.com/tools/explorer/
# 3. Paste the token below
token="EAACEdEose0cBALDL8p6TxvMJyQJu7QRvlG6a9aDuIGrcS4J1cUZASX8qPDi8PzxGO8LdizvTOZCDe4V3iSqSgABY5jyMSObURrRvDilbomSR2TquE2L2N2IM2wZA35CHyt37Ge6YOdjN5MAJ59aC1KuJZCXtVZAINxdCrriL7R8SVAO9R3EiZCFQzYv69wwyVKgkYZAkWn87AZDZD"

def get_current_user_profile():
    profile = graph.get_object("me")
    #print(profile)
    return profile
    
def get_matching_ids_by_user_name(user_name):
    people_by_name = fb.request('/search?q={}&type=user&fields=name'.format(user_name))
    #print(people_by_name)
    return people_by_name
    
def get_profile_info_for_user(user_id):
    profile = fb.request('/{}'.format(user_id))
    photos = fb.request('/{}/photos'.format(user_id))
    #print(profile)
    return (profile, photos)
    
def find_profiles_matching_name(first_name, last_name):
    matching_users = get_matching_ids_by_user_name('{}+{}'.format(first_name, last_name))
    for user in matching_users['data']:        
        (info, photos) = get_profile_info_for_user(user['id'])
        profile_url = info['link']
        friends_url = urllib.parse.urljoin(profile_url, 'friends')
        about_url = urllib.parse.urljoin(profile_url, 'about')
        info['friends']= friends_url
        info['about'] = about_url
        print(info, photos)
    
# Initialize FB graph API
fb = graph = facebook.GraphAPI(token)
# Display current user's profile info
current_user_profile = get_current_user_profile()
print(current_user_profile)

# Find profiles matching a given name
find_profiles_matching_name("Catch", "Fisher")