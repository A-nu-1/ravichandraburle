import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  copied = false;

  private readonly resumeText = `
RAVI BURLE

MES Business Systems Leader | IT/OT Manufacturing Integration |
Global Template & Change Governance


EXECUTIVE PROFILE

Manufacturing systems leader with 15+ years of experience across
MES, LIMS, shopfloor systems, industrial automation and IT/OT
integration in global, multi-site and GMP-regulated environments.

Experienced in MES capability business ownership, global template
governance, change control, validation strategy, system integrator
management, site leadership and stakeholder alignment.

Strong focus on audit readiness, data integrity, patient safety,
digital manufacturing and continuous improvement.


CORE COMPETENCIES

• MES Business Ownership & Global Template Governance
• MES / LIMS Lifecycle Management
• Change Governance
• CSV, Data Integrity & Regulated Validation
• System Integrator & Vendor Programme Management
• IT / OT Integration
• Multi-Site Deployment
• Stakeholder Alignment
• GMP Manufacturing
• Capital Programmes
• Digital Manufacturing
• Continuous Improvement


PROFESSIONAL EXPERIENCE

BIOTRONIK / TELEFLEX
Senior Manager IT-Production Systems
February 2025 – Present

• Owns MES, LIMS and shopfloor systems across manufacturing sites
  in Bülach, Switzerland and Warnemünde, Germany.
• Leads migration and replatforming activities.
• Coordinates system integrator project managers, site leads and SMEs.
• Supports o9 Advanced Planning integration with MES.
• Drives lifecycle management, change governance, GMP and CSV activities.


SKAN AG
Senior Manager IT-OT Digital Solutions
November 2023 – November 2024

• Developed digital and equipment technology roadmaps aligned with
  Industry 4.0 and GMP environments.
• Worked with pharma isolator controls, automation and connected
  manufacturing technologies.
• Developed reusable technology templates.
• Supported pilots, implementation, go-live and hypercare.
• Participated in global architecture workshops.


DSM-FIRMENICH
Projects Engineering Manager OT
April 2020 – October 2023

• Led a team of 15 automation engineers.
• Harmonised MES, DCS and OSI PI across EMEA life-sciences sites.
• Supported MES integration with advanced planning and demand planning.
• Worked on capital programmes valued above €10 million each.
• Led validation, deployment, go-live and hypercare activities.
• Delivered initiatives contributing approximately 15% cost savings.


BRUGG AG — CONTRACT
Project Manager Automation
April 2018 – March 2020

Project management and delivery within industrial automation
and manufacturing environments.


LANDIS+GYR
Project Engineer Grid Automation
June 2016 – March 2018

Engineering and project delivery within grid automation and
industrial control systems.


ALSTOM / GE
E&IC Manager — Power Plants
September 2012 – April 2016

Engineering and leadership responsibilities across electrical,
instrumentation and control systems within power-generation projects.


ALSTOM
Commissioning Lead Engineer
May 2007 – July 2012

• Worked with DCS, PLC, SCADA and safety-control systems.
• Led commissioning activities in industrial environments.
• Standardised engineering and commissioning protocols,
  contributing to approximately 20% shorter project timelines.


EDUCATION

MSc Mechatronics
University of Siegen, Germany
2004 – 2007

Bachelor of Engineering
Acharya Nagarjuna University, India
1998 – 2002
Distinction


CERTIFICATIONS & TRAINING

• PMI Project Management Professional (PMP)
• IREB Requirements Management
• SAP HANA Basics
• GICSP — ICS / OT Cybersecurity Training Certificate


TECHNICAL & LEADERSHIP EXPERTISE

• MES / LIMS Ownership
• System Integrator & Vendor Management
• CSV / Data Integrity / Audit Readiness
• IT / OT Integration
• MES, SCADA, PLC and APS Integration
• SAP S/4HANA Integration
• MQTT / PAC
• ISA-95
• Team Leadership — teams up to 15
• EMEA and multi-site manufacturing rollouts


LANGUAGES

English — Fluent
German — Very Good
Hindi — Fluent
Telugu — Fluent
Kannada — Good
`.trim();

  printResume(): void {
    window.print();
  }


  downloadTxt(): void {
    const blob = new Blob([this.resumeText], {
      type: 'text/plain;charset=utf-8',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ravi-Burle-Resume.txt';

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }

  async copyAll(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.resumeText);

      this.copied = true;

      window.setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (error) {
      console.error('Unable to copy resume:', error);
    }
  }
}