import React from 'react'
import PageLayout from '@/components/Layout/PageLayout';
import ContactUs from '@/components/Contact-us/ContactUs';



const page = () => {
  const navItems = [
    { label: 'Services', route: '#' },
    { label: 'Bridal', route: '#' },
    { label: 'Gallery', route: '#' },
    { label: 'Shop', route: '#' },
    { label: 'Take Franchise', route: '#' },
    { label: 'About US', route: '#' },
    { label: 'Book an Service', route: '#' },
    { label: 'Book An Appointment', route: '#' },
  ]
  return (
    <PageLayout navItems={navItems}>
        <ContactUs />
    </PageLayout>
  )
}

export default page