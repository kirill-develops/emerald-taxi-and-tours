import Laptop from '@mui/icons-material/Laptop';
import Launch from '@mui/icons-material/Launch';
import MailOutline from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { PopUpLink, TelLink, MailLink } from '@elements/Links';

export default function usePageLinks() {
  const {
    tripAdvisorDetails: { email, phone, web_url: webUrl, website },
  } = useContext(ParamContext);

  const websiteLinkData = website && {
    label: 'Website',
    icon: <Laptop fontSize="small" />,
    href: website,
    LinkEl: PopUpLink,
  };

  const phoneLinkData = phone && {
    label: phone,
    label2: 'Call',
    icon: <Phone fontSize="small" />,
    href: phone,
    LinkEl: TelLink,
  };

  const webUrlData = webUrl && {
    label: 'TripAdvisor Page',
    label2: 'TripAdvisor',
    icon: <Launch fontSize="small" />,
    href: webUrl,
    LinkEl: PopUpLink,
  };

  const emailData = email && {
    label: 'Email',
    icon: <MailOutline fontSize="small" />,
    href: email,
    LinkEl: MailLink,
  };

  return [websiteLinkData, phoneLinkData, webUrlData, emailData].filter(
    Boolean,
  );
}
