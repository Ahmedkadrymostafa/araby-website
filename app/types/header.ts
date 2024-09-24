interface HeaderPage {
    pageName: string;
    pageUrl: string;
  }
  
export default interface PrimaryHeaderProps {
    pages: HeaderPage[];
}