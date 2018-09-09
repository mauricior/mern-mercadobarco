import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup, Label, Input, FormText} from 'reactstrap';
import classnames from 'classnames';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class FindAd extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      activeTab: 1,
      dropdownOpen: false,
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

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
                      <FormGroup>
                        <Label for="manufacturer">Manufacturer</Label>
                        <Input type="select" name="select" id="manufacturer">
                          <option>All (500)</option>
                          <option>Beneteau</option>
                          <option>Maramar</option>
                          <option>Velamar</option>
                        </Input>
                        <Label>Cost: </Label>
                        <Range min={0} max={20} defaultValue={[0, 20]} tipFormatter={value => `R$ ${value}`} />
                        <Label>Foot: </Label>
                        <Range min={0} max={20} defaultValue={[0, 20]} tipFormatter={value => `${value}`} />
                        <Label for="state">State</Label>
                        <Input type="select" name="select" id="state">
                          <option>All (28)</option>
                          <option>SP (2)</option>
                          <option>RJ (4)</option>
                          <option>SC (3)</option>
                        </Input>
                      </FormGroup>
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
