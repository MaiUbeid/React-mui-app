import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../CardItem';

class CardList extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Location name',
        imageUrl:
          'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: 'destination',
        desc: ''
      },
      {
        id: 2,
        title: 'Location name',
        imageUrl:
          'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: 'destination',
        desc: ''
      },
      {
        id: 3,
        title: 'Location name',
        imageUrl:
          'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: 'destination',
        desc: ''
      },
      {
        id: 4,
        title: 'Location name',
        imageUrl:
          'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: 'destination',
        desc: ''
      },
      {
        id: 5,
        title: 'category',
        imageUrl:
          'https://www.dreamboxgate.net/forum/imgcache/2014/246726_dreambox-sat.com.jpg',
        type: 'category',
        desc: ''
      },
      {
        id: 6,
        title: 'category',
        imageUrl:
          'https://www.dreamboxgate.net/forum/imgcache/2014/246726_dreambox-sat.com.jpg',
        type: 'category',
        desc: ''
      },
      {
        id: 7,
        title: 'category',
        imageUrl:
          'https://www.dreamboxgate.net/forum/imgcache/2014/246726_dreambox-sat.com.jpg',
        type: 'category',
        desc: ''
      },
      {
        id: 8,
        title: 'category',
        imageUrl:
          'https://www.dreamboxgate.net/forum/imgcache/2014/246726_dreambox-sat.com.jpg',
        type: 'category',
        desc: ''
      },
      {
        id: 9,
        title: 'Location name',
        imageUrl:
          'https://www.farfeshplus.com/pic_server/articles_images/2015/11/22/mta7ef/2.jpg',
        type: 'attraction',
        price: 20,
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
      },
      {
        id: 10,
        title: 'Location name',
        imageUrl:
          'https://www.farfeshplus.com/pic_server/articles_images/2015/11/22/mta7ef/2.jpg',
        type: 'attraction',
        price: 20,
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
      },
      {
        id: 11,
        title: 'Location name',
        imageUrl:
          'https://www.farfeshplus.com/pic_server/articles_images/2015/11/22/mta7ef/2.jpg',
        type: 'attraction',
        price: 20,
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
      },
      {
        id: 12,
        title: 'Location name',
        imageUrl:
          'https://www.farfeshplus.com/pic_server/articles_images/2015/11/22/mta7ef/2.jpg',
        type: 'attraction',
        price: 20,
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
      }
    ]
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        {cards ? (
          <div>
            <Grid
              container
              spacing={24}
              justify="space-between"
              alignItems="center"
              style={{ padding: 24 }}
            >
              {cards.map(currentCard => {
                return (
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <CardItem key={currentCard.id} card={currentCard} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : (
          'No cards found'
        )}
      </div>
    );
  }
}

export default CardList;
