from models.user import User
from models.post import Post
from pprint import pprint

# create 5 users:
user1 = User('Shirly', 'Jones', 'shirlyjones', 'https://example.com/shirlyjones.jpg', 'Shirly is a software engineer', True)
user2 = User('Walter', 'Smith', 'waltersmith', 'https://example.com/waltersmith.jpg', 'Walter is a software engineer', True)
user3 = User('Emma', 'Davis', 'emmadavis', 'https://example.com/emmadavis.jpg', 'Emma is a data scientist', True)
user4 = User('Michael', 'Brown', 'michaelbrown', 'https://example.com/michaelbrown.jpg', 'Michael is a product manager', False)
user5 = User('Sarah', 'Wilson', 'sarahwilson', 'https://example.com/sarahwilson.jpg', 'Sarah is a UX designer', True)

# create 10 posts:
post1 = Post(1, 'https://picsum.photos/200?id=1', 'This is a post', 'This is a post', user1)
post2 = Post(2, 'https://picsum.photos/200?id=2', 'This is a post', 'This is a post', user2)
post3 = Post(3, 'https://picsum.photos/200?id=3', 'This is a post', 'This is a post', user3)
post4 = Post(4, 'https://picsum.photos/200?id=4', 'This is a post', 'This is a post', user4)
post5 = Post(5, 'https://picsum.photos/200?id=5', 'This is a post', 'This is a post', user5)
post6 = Post(6, 'https://picsum.photos/200?id=6', 'This is a post', 'This is a post', user1)
post7 = Post(7, 'https://picsum.photos/200?id=7', 'This is a post', 'This is a post', user2)
post8 = Post(8, 'https://picsum.photos/200?id=8', 'This is a post', 'This is a post', user3)
post9 = Post(9, 'https://picsum.photos/200?id=9', 'This is a post', 'This is a post', user4)
post10 = Post(10, 'https://picsum.photos/200?id=10', 'This is a post', 'This is a post', user5)

# Add all the users to a list (for convenience):
users = [user1, user2, user3, user4, user5]

# Store all posts in an array
posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10]




################################
# In-Class Challenges (users): #
################################
# For each of the tasks below, write a function that performs the requested operation:
# 1. Prints a dictionary representation of each user to the console.
def print_dictionary_of_users(users):
    for user in users:
        print(user.to_dict())

print_dictionary_of_users(users)

# 2. Returns a list of usernames (list of string)
def get_usernames(users):
    names=[]
    for user in users:
        names.append(user.username)
    return names

# 3. Returns a list of active users (list of User objects)
def get_active_users(users):
    active_users=[]
    for user in users:
        if user.is_active:
            active_users.append(user)
    return active_users
# 4. Prints a dictionary representation of the first 3 users
def print_first_three_users(users):
    count=0
    while count<3:
        print(users[count].to_dict())
        count+=1
    

# 5. Returns a list of image_urls of the posts (list of strings)
def get_post_pics(posts):
    pics=[]
    for post in posts:
        pics.append(post.image_url)
    return pics

################################
# In-Class Challenges (posts): #
################################
# For each of the tasks below, write a function that performs the requested operation:
# 1. Prints a dictionary representation of each post to the console.
def print_dict_of_posts(posts):
    for post in posts:
        print(post.to_dict())
# 2. Returns a list of posts' image_urls (list of strings)
def get_post_pics(posts):
    pics=[]
    for post in posts:
        pics.append(post.image_url)
    return pics
# 3. Returns a distinct list of posts' authors (list of User objects)
def get_post_authors(posts):
    authors=[]
    for post in posts:
        current_user= post.user
        if current_user not in authors:
            authors.append(current_user)
    return authors
# 4. Returns all of the post objects that belong to a given user (e.g., user3)  (list of Post objects)
def get_users_posts(posts, user):
    user_posts=[]
    for post in posts:
        current_user=post.user
        if current_user == user:
            user_posts.append(post)
    return user_posts


print_dictionary_of_users(users)
get_usernames(users)
get_active_users(users)
print_first_three_users(users)
print_dict_of_posts(posts)
get_post_pics(posts)
get_post_authors(posts) 
get_users_posts(posts, user1)
