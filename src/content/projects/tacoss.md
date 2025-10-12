---
title: "TACOSS"
logo: "/assets/logos/projects/tacoss_dark_simple.svg"
url: "/tacoss"
order: 1
---

**TACOSS** (Telescope Automation, Control, and Operation Software Suite) is our comprehensive open-source software platform for modern astronomical observatories. Currently operational at **OCM Observatory in Chile**, TACOSS is designed with an **observer-centric approach** where typically 2 operators manage multiple telescopes simultaneously from unified dashboards.

The modular architecture consists of a robust **core** (TIC middleware API with multi-protocol support, TCS service framework, NATS messaging, and telemetry) that provides essential telescope control and automation. Powerful **extensions** enhance functionality: **OFP (Observatory FITS Pipeline)** operates in both Live mode (real-time quality assessment and light curves at the observatory) and Science mode (high-precision publication-ready processing), **ML models** for image quality assessment and cycle time optimization, **multiple interfaces** (TOI graphical operator interface, TextUI command-line, OCA Monitor for system health), and advanced telemetry visualization with Prometheus and Grafana.

TACOSS emphasizes intelligent automation including automatic skyflats, temperature-compensated autofocus, and real-time photometric light curve generation, significantly reducing operator workload while ensuring consistent data quality.
