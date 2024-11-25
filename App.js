// src/App.js
import React, { useState } from 'react';
import { Button, Tab } from "./components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "./components/ui/card";
import { Label } from "./components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./components/ui/select";
import { Input } from "./components/ui/input";

const ClientPaymentManagementApp = () => {
  const [activeTab, setActiveTab] = useState('total-clients');
  const [caseType, setCaseType] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientList, setClientList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { name: 'Total Clients', value: 'total-clients', color: 'bg-blue-500' },
    { name: 'Client Name', value: 'client-name', color: 'bg-purple-500' },
    { name: 'Invoices Paid', value: 'invoices-paid', color: 'bg-green-500' },
    { name: 'Outstanding Payments', value: 'outstanding-payments', color: 'bg-yellow-500' },
    { name: 'Overdue Payments', value: 'overdue-payments', color: 'bg-red-500' },
  ];

  const caseTypes = [
    { name: 'Type 1', value: 'type-1' },
    { name: 'Type 2', value: 'type-2' },
    { name: 'Type 3', value: 'type-3' },
  ];

  const paymentStatuses = [
    { name: 'Paid', value: 'paid' },
    { name: 'Pending', value: 'pending' },
    { name: 'Overdue', value: 'overdue' },
  ];

  const handleAddClient = () => {
    setClientList([...clientList, clientName]);
    setClientName('');
  };

  const handleSearch = () => {
    const filteredClients = clientList.filter((client) => client.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredClients);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Client Payment Management App</CardTitle>
          <CardDescription>Manage client payments and track invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant="secondary"
                className={`${tab.color} ${activeTab === tab.value ? 'bg-opacity-100' : 'bg-opacity-50'} hover:bg-opacity-100 transition duration-200`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.name}
              </Button>
            ))}
          </div>
          {activeTab === 'total-clients' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Total Clients</h2>
              <p className="text-gray-600">View all clients and their payment status</p>
            </div>
          )}
          {activeTab === 'client-name' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Client Name</h2>
              <Input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter client name"
              />
              <Button variant="primary" onClick={handleAddClient}>
                Add Client
              </Button>
              <ul>
                {clientList.map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
              </ul>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search client name"
              />
              <Button variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          )}
          {activeTab === 'invoices-paid' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Invoices Paid</h2>
              <p className="text-gray-600">View all paid invoices and client information</p>
            </div>
          )}
          {activeTab === 'outstanding-payments' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Outstanding Payments</h2>
              <p className="text-gray-600">View all outstanding payments and client information</p>
            </div>
          )}
          {activeTab === 'overdue-payments' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Overdue Payments</h2>
              <p className="text-gray-600">View all overdue payments and client information</p>
            </div>
          )}
          <div className="mt-4">
            <Label>Case Type:</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Case Type" />
              </SelectTrigger>
              <SelectContent>
                {caseTypes.map((caseType) => (
                  <SelectItem key={caseType.value} value={caseType.value}>
                    {caseType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <Label>Payment Status:</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Payment Status" />
              </SelectTrigger>
              <SelectContent>
                {paymentStatuses.map((paymentStatus) => (
                  <SelectItem key={paymentStatus.value} value={paymentStatus.value}>
                    {paymentStatus.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-gray-600">Client Payment Management App</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClientPaymentManagementApp;
