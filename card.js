// src/components/ui/card.js
import React from 'react';

const Card = ({ children }) => <div className="card">{children}</div>;
const CardHeader = ({ children }) => <div className="card-header">{children}</div>;
const CardTitle = ({ children }) => <h2 className="card-title">{children}</h2>;
const CardDescription = ({ children }) => <p className="card-description">{children}</p>;
const CardContent = ({ children }) => <div className="card-content">{children}</div>;
const CardFooter = ({ children }) => <div className="card-footer">{children}</div>;

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
