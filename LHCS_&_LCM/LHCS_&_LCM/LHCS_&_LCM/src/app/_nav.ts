interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
 
//   {
//   name: 'HRM',
//   url: '/neha',
//   icon: 'icon-list',
//   children: [
//     {
//       name: 'Job',
//       url: '/neha/Job'
     
//     },
    
//     {
//       name: 'Resumes And Letters',
//       url: '/base/collapses',
     
//     },
//     {
//       name: 'Applications',
//       url: '/neha/Application',
      
//     },
//     {
//       name: 'Applicationslist',
//       url: '/neha/Applicationlist',
      
//     },
//     {
//       name: 'Reports',
//       url: '/base/paginations',
      
//     }

//   ]
// },
// {
//   name: 'Leaves',
//   url: '/leaves',
//   icon: 'icon-list',
//   children: [
//     {
//       name: 'Leaves Request',
//       url: '/leaves/Leave'
     
//     },
    
//     {
//       name: 'New Request',
//       url: '/base/collapses',
     
//     },
//     {
//       name: 'Allocations Request',
//       url: '/base/forms',
      
//     },
    
    
    
//   ]
// },
{
  name: 'Labour Contract Management',
  url: '/lcm',
  icon: 'icon-list',
  children: [
    {
      name: 'Prerequisite',
      icon: 'icon-note',
      url: '/lcm/Prerequisite'
     
    },
    
    {
      name: 'Labour',
      icon: 'icon-note',
      url: '/lcm/Labour',
     
    },
    {
      name: 'Contractor',
      icon: 'icon-note',
      url: '/lcm/Contractor',
      
    },
    {
      name: 'Manual CheckIn',
      icon: 'icon-note',
      url: '/lcm/CheckIn',
      
    },
   
    {
      name: 'Labour analysis/Report',
      icon: 'icon-note',
      url: '/lcm/report',
      
    },
    {
      name: 'Sheet',
      icon: 'icon-note',
      url: '/lcm/Sheet',
      
    },
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    
    
  ]
},

// {
//   name: 'Environmental Health & Security System',
//   url: '/lcm',
//   icon: 'icon-list',
//   children: [
    // {
    //   name: 'Prerequisite',
    //   url: '/lcm/Prerequisite'
     
    // },
    
    // {
    //   name: 'Labour',
    //   url: '/lcm/Labour',
     
    // },
    // {
    //   name: 'Contractor',
    //   url: '/lcm/Contractor',
      
    // },
    // {
    //   name: 'Manual CheckIn',
    //   url: '/lcm/CheckIn',
      
    // },
   
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    
    
//   ]
// },
// {
//   name: 'Vistor Management System',
//   url: '/lcm',
//   icon: 'icon-list',
//   children: [
    // {
    //   name: 'Prerequisite',
    //   url: '/lcm/Prerequisite'
     
    // },
    
    // {
    //   name: 'Labour',
    //   url: '/lcm/Labour',
     
    // },
    // {
    //   name: 'Contractor',
    //   url: '/lcm/Contractor',
      
    // },
    // {
    //   name: 'Manual CheckIn',
    //   url: '/lcm/CheckIn',
      
    // },
   
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    
    
//   ]
// },
// {
//   name: 'Human Resource Management System',
//   url: '/lcm',
//   icon: 'icon-list',
//   children: [
    // {
    //   name: 'Prerequisite',
    //   url: '/lcm/Prerequisite'
     
    // },
    
    // {
    //   name: 'Labour',
    //   url: '/lcm/Labour',
     
    // },
    // {
    //   name: 'Contractor',
    //   url: '/lcm/Contractor',
      
    // },
    // {
    //   name: 'Manual CheckIn',
    //   url: '/lcm/CheckIn',
      
    // },
   
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    
    
//   ]
// },
// {
//   name: 'Canteen Management System',
//   url: '/lcm',
//   icon: 'icon-list',
//   children: [
//     // {
    //   name: 'Prerequisite',
    //   url: '/lcm/Prerequisite'
     
    // },
    
    // {
    //   name: 'Labour',
    //   url: '/lcm/Labour',
     
    // },
    // {
    //   name: 'Contractor',
    //   url: '/lcm/Contractor',
      
    // },
    // {
    //   name: 'Manual CheckIn',
    //   url: '/lcm/CheckIn',
      
    // },
   
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    // {
    //   name: 'Labour analysis/Report',
    //   url: '/lcm/report',
      
    // },
    
    
//   ]
// },
// {
//   name: 'LHCS',
//   url: '/hc',
//   icon: 'icon-list',
//   children: [
//     {
//       name: 'Report',
//       url: '/hc/report'
     
//     },
    
//     {
//       name: 'Labour',
//       url: '/hc/Labour',
     
//     },
//     {
//       name: 'Contractor',
//       url: '/hc/contractor',
     
//     }
    
   
    
//   ]
// }
  
 ];
