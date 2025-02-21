Our scam idea is to find people on twitter looking for deals/thinking of buying stuff on discount/issues with amazon packages, then taking them as individuals and using Langchain LLM to develop a custom message for them. It will include a llm message + link to an amazon clone where if they buy anything they will be scammed!

searching -> processing -> gathering 

1) setup and api access

condidering using .env to manage all api keys

2) searching for relevant tweets

using tweety to build a list of people that are facing probelms of specific keywords 
so that we can find targets to scam 

# considering using vader for sentiment analysis so that we can sort users based on 
urgency to reply 

3) process & generate ai message using llm 

we will the problem faced by the user and custom generate a response for it using
lsngchain llm.

4) reply to the tweet of the target

finally use, tweepy to reply to the target with the personalized message and a link to
the scam website so that we can gt their details


