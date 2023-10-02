import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl"; 
import "./partDetail.css";

function PartDetail() {
  const location = useLocation();
  const { state: { part, userRole } } = location;
  const [editable, setEditable] = useState(userRole);
  const intl = useIntl();

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  return (
    <div className="part-detail">
      <Container>
        <h2>
          <FormattedMessage id="partDetail.detailHeader" />
        </h2>
        <Row>
          <Col md={7}>
            <Card.Img variant="top" src={part.image} alt={part.carModel} />
          </Col>
          <Col md={5}>
            <Card className="text-Detail">
              <Card.Body>
                <Card.Title>{part.partName}</Card.Title>
                {editable ? (
                  <div>
                    {}
                    <Card.Text>
                      <FormattedMessage id="partDetail.madeBy" />
                      <input
                        type="text"
                        value={part.carMaker}
                        onChange={(e) => part.carMaker = e.target.value}
                      />
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.model" />
                      <input
                        type="text"
                        value={part.carModel}
                        onChange={(e) => part.carModel = e.target.value}
                      />
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.year" />
                      <input
                        type="text"
                        value={part.carYear}
                        onChange={(e) => part.carYear = e.target.value}
                      />
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.available" />
                      <input
                        type="checkbox"
                        checked={part.avalaible}
                        onChange={(e) => part.avalaible = e.target.checked}
                      />
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.description" />
                      <input
                        type="text"
                        value={part.description}
                        onChange={(e) => part.description = e.target.value}
                      />
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.price" />
                      <input
                        type="text"
                        value={part.price}
                        onChange={(e) => part.price = e.target.value}
                      />
                    </Card.Text>
                    <Button onClick={handleEditToggle}>
                      <FormattedMessage id="partDetail.saveChanges" />
                    </Button>
                  </div>
                ) : (
                  <div>
                    {}
                    <Card.Text>
                      <FormattedMessage id="partDetail.madeBy" />: <p>{part.carMaker}</p>
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.model" />: <p>{part.carModel}</p>
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.year" />: <p>{part.carYear}</p>
                    </Card.Text>
                    <Card.Text>
                      <FormattedMessage id="partDetail.description" />: <p>{part.description}</p>
                    </Card.Text>
                    <Card.Text>
                    <FormattedMessage id="partDetail.price" />:{" "}
                    {intl.formatNumber(
                      parseFloat(part.price.replace("$", "")) *
                        (intl.locale === "es-ES" || intl.locale === "es" ? 3800 : 1), 
                      {
                        style: "currency",
                        currency: intl.locale === "es" ? "COP" : "USD",
                      }
                    )}
                  </Card.Text>
                  </div>
                )}
                <Link to="/Home" state={{ userRole: userRole }}>
                  <FormattedMessage id="partDetail.backToList" />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PartDetail;
