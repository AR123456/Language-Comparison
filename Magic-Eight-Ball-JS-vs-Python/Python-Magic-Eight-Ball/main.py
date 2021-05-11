import random
import time
answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

print('  __  __          _____ _____ _____    ___  ')
print(' |  \/  |   /\   / ____|_   _/ ____|  / _ \ ')
print(' | \  / |  /  \ | |  __  | || |      | (_) |')
print(' | |\/| | / /\ \| | |_ | | || |       > _ < ')
print(' | |  | |/ ____ \ |__| |_| || |____  | (_) |')
print(' |_|  |_/_/    \_\_____|_____\_____|  \___/ ')
print('')
print('')
print('')
print("Magic 8 Ball")
print("What is our name?\n")
name = input()
print("Hello" + name)
def question():
    question = input("You may ask your yes or no question of the Magic 8 Ball!\n")
    print("Thinking...")
    time.sleep(random.randrange(0,5))
    print(random.choice(answers))

while True:
    question()
    repeat = input("Would you like to ask another question? (Y or N)")
    if not (repeat == "y" or repeat == "Y"):
        print("Come back if you have more questions!")
        break
