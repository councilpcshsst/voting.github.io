import random
import string

def generate_token(length=6):
    characters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

# Generate tokens for 96 users
num_users = 96
tokens = [generate_token() for _ in range(num_users)]

# Print the tokens
for token in tokens:
    print(token)
