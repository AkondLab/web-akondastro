---
title: "TACOSS"
description: "Telescope Automation, Control, and Operation Software Suite - A comprehensive open-source platform for modern astronomical observatories"
logo: "/assets/logos/projects/tacoss_dark_simple.svg"
externalUrl: "https://github.com/araucaria-project"
---

**TACOSS** (Telescope Automation, Control, and Operation Software Suite) is a comprehensive open-source software platform for modern astronomical observatories. Developed through close collaboration between AkondAstro and astronomical institutions, TACOSS represents the next generation of observatory control and automation systems.

![TACOSS](/assets/images/tacoss/tacoss_banner.png)

TACOSS is **ready for deployment but in active development**, currently operational at OCM Observatory in Chile, with continuous enhancements based on real-world operational feedback.

## Credits & Collaboration

TACOSS is a collaborative effort bringing together expertise from:

**Institutions:**
- **[CAMK PAN](https://camk.edu.pl)** (Nicolaus Copernicus Astronomical Center, Polish Academy of Sciences) - Primary research partner
- **[Araucaria Group](https://araucaria.camk.edu.pl)** - Active astronomical research team within CAMK
- **[OCM Observatory](https://ocm.camk.edu.pl)** - Testing and deployment facility in Chile, operated by the Araucaria Group

**Core Development Team (MMME Software Team):**
- [Marek Górski](https://github.com/astromg)
- [Mikołaj Kałuszyński](https://github.com/majkelx)
- [Mirosław Kicia](https://github.com/MMiirrkk)
- [Ernest Lasek](https://github.com/ernestworkspace)

**Contributing Team Members:**
- Piotr Wielgórski
- Paulina Kaczmarek
- Piotr Żuk
- Bartłomiej Matuszkiewicz
- Dawid Chamal

<!-- IMAGE: Partner Logos - CAMK PAN, Araucaria Group, OCM Observatory -->

TACOSS is developed as **open-source software** and all components are be publicly released once stabilized. The project combines AkondAstro's software engineering expertise with CAMK's deep astronomical research experience.

## Current Deployment

TACOSS is currently operational at the **OCM Observatory** in Chile, where it controls telescope operations and manages data acquisition. While initially developed for OCM, the platform is designed with universal applicability in mind and is being prepared for deployment at additional observatories worldwide.

<!-- IMAGE: OCM Observatory - Night Operations with TACOSS -->
![Night Observations in OCM](/assets/images/tacoss/night.jpeg)

## Overview

TACOSS provides a complete, modular solution for telescope automation and observatory management. The architecture emphasizes flexibility, allowing observatories to deploy only essential components while maintaining the option to expand functionality as requirements evolve.

### Observer-Centric Design Philosophy

TACOSS is built around an **observer-centric approach** where typically **2 operators manage multiple telescopes simultaneously**. This design contrasts with traditional one-operator-per-telescope systems, enabling efficient multi-telescope coordination at modern robotic observatories.

The system provides intuitive interfaces that allow observers to:
- Monitor and control multiple telescopes from unified dashboards
- Coordinate synchronized observations across telescope arrays
- Respond quickly to transient events and changing conditions
- Manage automated observation sequences while maintaining manual oversight

<!-- IMAGE: Observer-Centric Interface Overview - Multiple Telescope Monitoring -->

## Architecture

TACOSS follows a **layered architecture** separating concerns between hardware control (lower layer) and observation management (higher layer):

<!-- IMAGE: TACOSS System Architecture - Lower and Higher Software Layers -->
![TACOSS System Architecture - Lower and Higher Software Layers](/assets/images/tacoss/tic-layers.svg)

### TACOSS Core

The core provides essential telescope control and automation capabilities that can operate independently:

#### **TIC (Telescope Interface Controller)**
The central middleware API serving as a single point of access for all telescope systems:

- **Multi-Protocol Support**:
  - **ASCOM Alpaca** 
  - Pillar (IRIS legacy protocol)
  - BESO protocol
  - IRIS CCD protocol
  - Testing and simulation protocols
  - **Planned**: INDI and additional protocols
- **Request-Response Model**: ZMQ-based communication with TIC clients
- **Configuration-Driven**: Central observatory YAML configuration distributed via NATS messaging for system-wide consistency

#### **TCS (Telescope Control Services)**
Universal service framework for distributed telescope automation:

- **Service Types**: Permanent services, blocking permanent services, and single-shot operations
- **NATS-Based**: Distributed service discovery, lifecycle management, and health monitoring
- **Execution Independence**: Services work with any execution method (manual, subprocess, asyncio, systemd, containers)
- **Decorator-Based Development**: Modern Python decorators (`@service`, `@config`) for clean service registration
- **Monitoring Tools**: `tcsctl` CLI for real-time service monitoring and management

#### **Telemetry System**
Real-time monitoring and data collection from all observatory systems, capturing operational metrics and performance data.

#### **NATS Messaging Infrastructure**
High-performance distributed messaging system enabling:
- Service-to-service communication
- Telemetry data distribution
- Command and control messages
- System-wide event notification
- **Central configuration distribution** across all observatory components

<!-- IMAGE: NATS Messaging Architecture Diagram -->
![NATS Messaging Architecture Diagram](/assets/images/tacoss/tic-and-nats.svg)

## TACOSS Extensions

Extensions enhance core functionality with specialized capabilities:

### **PMS (Pull-Metrics Service)**
Telemetry aggregation and distribution service:

- **Data Collection**: Pull telemetry from TIC and other observatory sources via REST/NATS
- **Multi-Destination Publishing**: Push metrics to NATS, REST APIs, Prometheus, and Grafana
- **Real-time Streaming**: Continuous telemetry flow for monitoring and alerting
- **Data Transformation**: Format conversion and aggregation for different consumers
- **Buffering & Reliability**: Handles network interruptions and ensures data delivery

<!-- IMAGE: PMS Data Flow - Telemetry Collection and Distribution -->

### **OFP (Observatory FITS Pipeline)**
Scientific data processing pipelines for astronomical research, operating in two complementary modes:

#### **Live Mode (OCM Observatory, Chile)**
Real-time processing at the observatory for immediate feedback:

- **Rapid Quality Assessment**: Image quality check within seconds of exposure completion
- **Real-time Light Curve Updates**: New photometric data points appear seconds after image capture
- **On-the-fly Calibration**: Uses most recent calibration frames available
- **Observer Feedback**: Immediate alerts for tracking issues, focus problems, or poor conditions
- **Quick-look Products**: Fast reduced images for target verification and observation planning

#### **Science Mode (CAMK, Poland)**
Delayed high-precision processing for publication-quality results:

- **Full Calibration Library**: Access to complete all-night calibration frame sets (bias, darks, flats)
- **Optimal Frame Selection**: Statistical analysis to select best calibration frames
- **Enhanced Precision**: Multiple reduction passes with refined parameters
- **Publication-Ready Products**: Science-grade photometry and astrometry
- **Archive Integration**: Long-term storage and database integration

#### **Processing Capabilities:**

- **Automated Data Reduction**:
  - Bias, dark, and flat-field calibration
  - Cosmic ray removal and artifact correction
  - WCS (World Coordinate System) calibration
  - Image stacking and combination

- **Photometric Processing**:
  - Aperture and PSF photometry
  - Differential photometry with reference stars
  - Light curve generation and analysis
  - Catalog cross-matching (Gaia, 2MASS, etc.)

- **Astrometric Solutions**:
  - Precise astrometry using Gaia DR3
  - Proper motion corrections
  - High-precision position measurements

- **Quality Assessment**:
  - Automatic image quality metrics (FWHM, ellipticity, sky background)
  - ML-based quality classification (U-Net model)
  - Outlier detection and flagging

- **Integration & Export**:
  - FITS header standardization
  - VOTable and CSV export formats
  - Integration with astronomical databases
  - Pipeline result archiving

<!-- IMAGE: OFP Pipeline Architecture - Data Processing Flow (Live vs Science Mode) -->
![OFP Pipeline Modules](/assets/images/tacoss/ofp.png)

### **Database Systems**
Robust data persistence infrastructure:

- **MongoDB**: Primary database with spatial indices for efficient RA/DEC coordinate queries
  - Target catalogs with geospatial search
  - Observation metadata and history
  - System configuration storage
  - Scientific data products indexing

<!-- IMAGE: MongoDB Schema - RA/DEC Spatial Indexing -->
![NATS Messaging Architecture Diagram](/assets/images/tacoss/database.svg)

### **AI Assistant & Machine Learning** *(In Development)*
Intelligent automation and quality assessment:

- **Image Quality Assessment**: U-Net deep learning model for automatic image segmentation and quality classification
  - Real-time classification of observational data quality
  - Automated detection of artifacts, clouds, and tracking issues
- **Cycle Time Prediction**: CTC (Cycle Time Calculator) ML model for optimizing observation scheduling
  - Machine learning-based prediction of telescope operation cycle times
  - Accounts for filter changes, readout times, slew distances, and environmental conditions
  - Published research: Kicia, M., Kałuszyński, M., Górski, M. *et al.* "Machine learning techniques for robotic telescope efficiency optimization" *Exp Astron* **58**, 19 (2024). [https://doi.org/10.1007/s10686-024-09936-3](https://doi.org/10.1007/s10686-024-09936-3)

<!-- IMAGE: ML Model Performance - U-Net Segmentation Examples and CTC Prediction Accuracy -->
- **Planned Features**:
  - Integration via **CMP (Claude Model Protocol)** and **LangChain** frameworks
  - Automated target selection and prioritization
  - Weather prediction and observation optimization
  - Anomaly detection in telemetry and data
  - Predictive maintenance recommendations

### **Telemetry & Visualization**
Advanced monitoring infrastructure:
- **Prometheus**: Metrics collection and alerting
- **Elasticsearch**: Log aggregation and search
- **Grafana Dashboards**: Real-time visualization and monitoring
- **Historical Analysis**: Long-term trend analysis and reporting
- **Performance Metrics**: System health and optimization insights

<!-- IMAGE: Grafana Dashboard - Real-time Observatory Monitoring -->

## User Interfaces

TACOSS provides multiple interface options tailored to different operational needs and user preferences:

### **TOI (Telescope Operator Interface)**
Primary graphical interface for observatory operators:

- **Multi-Telescope Dashboard**: Simultaneous monitoring and control of multiple telescopes
- **Plan Management**: Visual observation sequence editor and scheduler
- **Real-time Status**: Live telemetry display with customizable layouts
- **Target Management**: Interactive sky maps and target catalogs
- **Quick Actions**: One-click access to common operations (focus, skyflats, calibrations)
- **Alerts & Notifications**: Visual and audio alerts for critical events
- **Session Logging**: Complete audit trail of operator actions

<!-- IMAGE: TOI Screenshot - Multi-Telescope Operator Dashboard -->
![TOI Screenshot - Multi-Telescope Operator Dashboard](/assets/images/tacoss/toi.png)


### **TextUI**
Command-line interface for advanced users and scripting:

- **Interactive Shell**: Tab-completion and command history
- **Scripting Support**: Batch operations and automation scripts
- **Remote Access**: SSH-based operation for remote observing
- **Low Bandwidth**: Efficient for slow network connections
- **Integration Friendly**: Easy integration with custom tools and workflows

![TextUI Screenshot - Multi-Telescope Text Dashboard](/assets/images/tacoss/textui.png)

### **WebUI** *(Planned)*
Browser-based interface for remote access:

- **Vue.js Framework**: Modern reactive web application
- **Responsive Design**: Desktop, tablet, and mobile support
- **Public API Access**: RESTful API for external integrations
- **Guest Monitoring**: Public read-only views for outreach and education

### **OCA Monitor**
Universal observatory monitoring application:

- **System Health**: Real-time status of all observatory components
- **Live Telescope Positions**: On the current all-sky camera image.
- **Live lightcureves**: Real-time photometric data visualization
- **Environmental Monitoring**: Weather, dome conditions, safety systems
- **Network Status**: NATS messaging and service connectivity
- **Historical Dashboards**: Time-series graphs and trend analysis
- **Cross-Platform**: Works with any TACOSS-powered observatory

The system is open, many observers writes their own panels.

<!-- IMAGE: OCA Monitor - Observatory Health Dashboard -->
![OCA Monitor - Observatory Health Dashboard](/assets/images/tacoss/ocam.png)

### **Public API & Integration**
Open interfaces for external systems:

- **RESTful HTTP API**: Standard web service endpoints
- **NATS Message Interchange**: Pub/sub messaging for CMP servers and external tools
- **WebSocket Streaming**: Real-time telemetry feeds
- **Authentication & Authorization**: Secure access control for different user roles

## Intelligent Automation

TACOSS includes sophisticated automation routines that reduce operator workload and ensure consistent data quality:

### **Automatic Skyflats**
Intelligent twilight flat-field acquisition:
- Autonomous detection of optimal twilight conditions
- Adaptive exposure time calculation based on sky brightness
- Multi-filter sequences with automatic filter wheel management
- Quality assessment and automatic retakes if needed

![Automatic Skyflats](/assets/images/tacoss/flat.png)

### **Autofocus System**
Precision focus maintenance:
- Temperature-compensated focus tracking
- V-curve or half-flux diameter (HFD) methods
- Per-filter focus offset calibration
- Periodic refocusing based on temperature changes or elapsed time

### **Automated Light Curve Generation**
Real-time photometric processing:
- Automatic source detection and aperture photometry
- Differential photometry with reference star selection
- Real-time light curve plotting and analysis
- Integration with astronomical databases for comparison

<!-- IMAGE: Automated Light Curve Generation Pipeline -->

## Key Features

### **Modular & Extensible**
- Deploy only required components
- Add extensions as needs grow
- Mix and match core and extension modules
- Independent operation of core without extensions

### **Universal & Hardware-Agnostic**
- Compatible with diverse telescope configurations
- Support for multiple instrument types
- Protocol abstraction layers
- Designed for deployment beyond OCM

### **Open Source Philosophy**
- Fully open-source codebase (upon public release)
- Community-driven development
- Transparent development process
- Collaborative improvement model

### **Production-Ready**
- Currently operational at OCM Observatory
- Proven in real-world conditions
- Continuous refinement based on operational experience
- Battle-tested components

### **Scalable Architecture**
- Single telescope installations
- Multi-telescope networks
- Distributed observatory systems
- Cloud-ready deployment options

## Technology Stack

TACOSS leverages modern, proven technologies:

**Backend:**
- **Python 3.20+**: Core programming language
- **FastAPI**: High-performance async web framework
- **asyncio**: Asynchronous I/O operations

**Messaging & Communication:**
- **NATS**: Distributed messaging and service communication
- **ZMQ**: Low-latency request-response messaging
- **WebSockets**: Real-time bidirectional communication

**Data Management:**
- **MongoDB**: Primary database with spatial indices for RA/DEC coordinate queries
- **PostgreSQL**: Supporting relational database for structured data

**Monitoring & Visualization:**
- **Grafana**: Dashboard and visualization platform
- **Prometheus**: Metrics collection and alerting
- **Elasticsearch**: Log aggregation and search

**Deployment:**
- **Docker**: Containerization for flexible deployment
- **systemd**: Service management on Linux systems
- **Poetry**: Python dependency management

## Development Status

TACOSS is **ready for deployment but in active development**, currently operational at OCM Observatory in Chile. The platform is being continuously refined based on real-world operational feedback, with components being stabilized for public open-source release.

**Current Focus Areas:**
- Stabilization and hardening of core components
- Comprehensive documentation and developer guides
- Preparation for multi-observatory deployment
- Enhanced extension integration
- AI/ML model refinement and validation
- WebUI development (Vue-based)
- CMP and LangChain integration for advanced AI features

**Operational Status:**
- ✅ Core telescope control and automation (TIC, TCS, drivers)
- ✅ Multi-telescope coordination and observation management
- ✅ TOI and TextUI interfaces operational
- ✅ Automated procedures (skyflats, focusing, light curves)
- ✅ ML models for image quality and cycle time optimization
- 🚧 WebUI interface (in development)
- 🚧 Advanced AI assistant via CMP/LangChain (planned)
- 🚧 Proposal and Results database (in design)

## Use Cases

TACOSS is designed for diverse observatory environments:

### **Professional Research Observatories**
Full-featured control for research-grade facilities requiring robust automation, data processing, and multi-instrument coordination.

### **University Teaching Facilities**
Educational deployment with emphasis on accessibility, safety controls, and learning-friendly interfaces.

### **Amateur Astronomy Clubs**
Cost-effective automation for amateur installations with scaling options as capabilities grow.

### **Remote Robotic Telescope Networks**
Distributed control for multiple telescopes with centralized monitoring and coordination.

### **Multi-Telescope Arrays**
Coordinated operations for arrays requiring synchronized observations and data collection.

## Future Development

Planned enhancements and research directions:

### **Enhanced AI Integration**
- Advanced target selection algorithms
- Machine learning-based anomaly detection
- Predictive maintenance using operational data
- Automated observation strategy optimization

### **Multi-Observatory Coordination**
- Synchronized multi-site observations
- Distributed data processing
- Network-wide resource scheduling
- Cross-observatory data sharing

### **Advanced Pipeline Capabilities**
- Real-time data processing
- Advanced photometric techniques
- Automated spectroscopic reduction
- Machine learning-based classification

### **Extended Hardware Support**
- Additional telescope mount protocols
- More camera and detector types
- Advanced instrument control
- Custom hardware integration framework

### **Cloud-Native Features**
- Hybrid cloud/on-premise deployment
- Cloud-based data processing
- Remote access and collaboration tools
- Scalable compute resources

## Getting Started

TACOSS components are available on GitHub:
- [Araucaria Project Organization](https://github.com/araucaria-project)

For collaboration inquiries or more information about TACOSS deployment:
- Visit [AkondAstro](/)
- Contact through [AkondLab](https://www.akond.com)

---

*TACOSS is actively developed and refined based on operational experience at OCM Observatory. Components are being prepared for public open-source release.*
