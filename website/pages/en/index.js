const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

// library.add(faStroopwafel);

const imgUrl = (img) =>`${siteConfig.baseUrl}img/${img}`;

const Block = ({
  id,
  background,
  children,
  layout,
}) => (
  <Container
    padding={['bottom', 'top']}
    id={id}
    background={background}>
    <GridBlock
      align="center"
      contents={children}
      layout={layout}
    />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[{
      content: '<i class="fab fa-react"></i><i class="fab fa-gulp"></i>',
      title: 'Npm Packages',
    }, {
      content: '<i class="fab fa-chrome"></i><i class="fab fa-weixin"></i>',
      title: 'Products',
    }]}
  </Block>
);

const Index = () => (
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <div className="mainContainer">
      <Features />
    </div>
  </div>
);

module.exports = Index;
