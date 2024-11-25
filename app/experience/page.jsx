import { WorkEx } from "@/Components/home/workEx";
import { Container, Paper } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="homepage">
        <div className="info">
          <p className="info_name">Work Experience</p>
          <p className="info_text1">Detailed Work Experience.</p>
        </div>
      </div>
      <div className="landingpage">
        <Paper>
          <WorkEx />
        </Paper>

        <Paper>
          <div>
            <h3 className="exp">Technical Skills</h3>
            <p className="exp-1">
              I am proficient with the following technologies:
            </p>
            <ul>
              <li>
                NSX-T (VMWare Network Security virtualization Transformer)
              </li>
              <li>Cloud computing</li>
              <li>Tanzu kubernetes</li>
              <li>Ingress</li>
              <li>Terraform</li>
              <li>Aws Cloud Formation</li>
              <li>GitHub actions</li>
              <li>Continuous integration and continuous deployment (CICD)</li>
              <li>Kubernetes</li>
              <li>Automation (Ansible, bash, EKS)</li>
              <li>Containization (Docker, ECS)</li>
              <li>Jenkins</li>
              <li>AWS Solutions Architect</li>
              <li>Server (windows and Linux) management</li>
              <li>Cloud Network Security</li>
              <li>AWS CDK/SDK</li>
              <li>VMware management (vSphere, vCloud director)</li>
              <li>Networking (Routing and Switching)</li>
              <li>Fortigate firewallsWeb Deployment</li>
              <li>Azure</li>
              <li>Digital ocean</li>
            </ul>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Page;
