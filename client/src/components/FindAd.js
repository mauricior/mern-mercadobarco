import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class FindAd extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      sellItems: this.props.items
    };
  }

  toggle(tab) {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          {this.state.sellItems.map(item => {
            return (
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === item.id})}
                  onClick={() => { this.toggle(item.id); }}
                  >
                  {item.itemName}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.state.sellItems.map(item => {
            return (
              <TabPane tabId={item.id}>
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>{item.itemName}</CardTitle>
                      <CardText>Filter</CardText>
                      <Button>Search</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    );
  }
}

export default FindAd;
