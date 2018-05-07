import { Component } from '@nestjs/common';


const Sentiment = require('sentiment');

@Component()
export class CommentService {

    addComment(data) {
        const Pusher = require('pusher');
        const sentiment = new Sentiment();
        const sentimentScore = sentiment.analyze(data.comment).score;

        const payload = {
            message: data.comment,
            sentiment: sentimentScore
        }

        var pusher = new Pusher({
            appId: 'YOUR_APP_ID',
            key: 'YOUR_API_KEY',
            secret: 'YOUR_SECRET_KEY',
            cluster: 'CLUSTER',
            encrypted: true
          });

          pusher.trigger('comments', 'new-comment', payload);
    }
}