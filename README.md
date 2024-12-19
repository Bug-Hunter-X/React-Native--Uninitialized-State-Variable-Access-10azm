# React Native: Uninitialized State Variable Access

This repository demonstrates a common error in React Native: accessing a state variable before it's initialized.  This leads to unexpected behavior and runtime errors.

## The Problem

In functional components, state variables are initialized *after* the component's first render.  Attempting to access the state before this leads to an undefined value, resulting in an error.

## The Solution

Always provide an initial value to your state variables.  If the initial value is unknown, set it to `null` or a default value.  Also consider conditional rendering to avoid trying to render parts of the UI which depend on the state before it is available. 
