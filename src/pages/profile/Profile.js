import React, { memo } from 'react';
import Widget from '../../components/Widget';
import styles from './Profile.module.scss';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const Profile = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.root}>
      <Breadcrumb>
        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
        <BreadcrumbItem active>Profile</BreadcrumbItem>
      </Breadcrumb>
      <h1 className="mb-lg">Profile</h1>
      <Row>
        <Col sm={6}>
          <Widget
            title={
              <h5>
                Edit Profile <span className="fw-semi-bold">Form</span>
              </h5>
            }
          >
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="input-name">Name</Label>
                <Input bsSize="lg" type="text" name="name" id="input-name" />
              </FormGroup>
              <FormGroup>
                <Label for="input-email">Email</Label>
                <Input bsSize="lg" type="email" name="email" id="input-email" />
              </FormGroup>
              <FormGroup>
                <Label for="input-password">Password</Label>
                <Input bsSize="lg" type="password" name="password" id="input-password" />
              </FormGroup>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div className="abc-checkbox">
                    <Input id="input-checkbox" type="checkbox" />
                    <Label for="input-checkbox" />
                  </div>
                  <span>Remember me</span>
                </div>
                <ButtonGroup className="pull-right">
                  <Button className="ml-sm" color="default">Cancel</Button>
                  <Button color="danger">Save</Button>
                </ButtonGroup>
              </div>
            </Form>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Profile);
