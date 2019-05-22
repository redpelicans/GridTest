import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import App from './App_bis';

const datas = [
  {
    firstname: 'Thomas',
    lastname: 'Tridon',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'thomas.tridon@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS',
      'Docker',
      'Functionnal Tests',
      'Redis'
    ],
    status: 'Accepted',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Arnaud',
    lastname: 'LeFloch',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'arnaud.lefloch@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS'
    ],
    status: 'Accepted',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Eric',
    lastname: 'Basley',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'eric.basley@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS',
      'Docker',
      'Redis'
    ],
    status: 'Accepted',
    rating: 5,
    reporter: {
      firstname: 'Nicolas',
      lastname: 'Briemant'
    }
  },
  {
    firstname: 'Pauline',
    lastname: 'Ortega',
    country: 'ae',
    phoneNumber: '06 00 00 00 00',
    mail: 'pauline.ortega@redpelicans.com',
    assets: [
      'UI/UX'
    ],
    status: 'Pending',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Skander',
    lastname: 'Mefhta',
    country: 'tn',
    phoneNumber: '06 00 00 00 00',
    mail: 'skander.mefhta@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS'
    ],
    status: 'Pending',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Mike',
    lastname: 'Velluet',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'mike.velluet@redpelicans.com',
    assets: [
      'ReactJS',
      'NodeJS'
    ],
    status: 'Accepted',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Nicolas',
    lastname: 'Briemant',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'nicolas.briemant@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS',
      'Docker'
    ],
    status: 'Accepted',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Jules',
    lastname: 'Ortega',
    country: 'ae',
    phoneNumber: '06 00 00 00 00',
    mail: 'jules.ortega@redpelicans.com',
    assets: [
      'UI/UX'
    ],
    status: 'Pending',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  },
  {
    firstname: 'Raphael',
    lastname: 'Mardinli',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'raphael.mardinli@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
    ],
    status: 'Pending',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  }
];

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1
  },
  link: {
    width: '100px'
  },
  root: {
    width: '300px'
  },
  bis: {
    height: '100%'
  }
}

const EnhanceComponent = withStyles(styles)(App);

ReactDOM.render(<EnhanceComponent datas={datas} />, document.getElementById('root'));
