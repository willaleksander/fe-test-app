/*
Constants used to set URLs and also to help internationilize the application strings
*/

export class GlobalConstrants {
    public static base_url = 'http://localhost:3000';
    public static users_endpoint = '/users';
    public static statuses_endpoint = '/statuses';
    public static createuser_endpoint = '/create'
    
    public static users_form_username = "Username";
    public static users_form_firstname = "First Name";
    public static users_form_lastname = "Last Name (Optional)";
    public static users_form_email = "E-mail";
    public static users_form_status = "Status";
    public static users_form_datecreated = "Date Created";

    public static users_list_newuser = "New User";
    public static users_list_rows = "Rows";

    public static users_create_addnewuser = "Add New User";
    public static users_create_cancel = "Cancel";

    public static users_errormsg_required = "This field is required";
    public static users_errormsg_minchar = "Minimum 3 chars";
    public static users_errormsg_maxchar = "Maximum 20 chars";
    public static users_errormsg_pattern = 'Username cannot contain: { } " [ ] . !';
    public static users_errormsg_usernameexist = "Username already exists";
    public static users_errormsg_emailformt = "E-mail must be in a valid format";
    
    public static users_alert_title = "Alert";
    public static users_alert_theuser = "The user";
    public static users_alert_wascreated = "was created!";
    public static users_alert_ok = "Ok";
}