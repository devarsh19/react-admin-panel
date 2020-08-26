import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a
                  href="http://www.theversatileexpress.ca/terms"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="http://www.theversatileexpress.ca/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com?ref=lbr-footer">
              The Versatile Express
            </a>
            , made with care for a better dispatching orders
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
