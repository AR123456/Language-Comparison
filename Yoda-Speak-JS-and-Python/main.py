# yoda speak in python 
def to_yoda_speak(text):
    say = text.split()
    say_reverse = say[::-1]
    # return " ".join(reversed_word_list)
    print( " ".join(say_reverse))

to_yoda_speak("Good morning ")


# Now send to HTML with Django 
# https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django