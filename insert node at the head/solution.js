function insertNodeAtHead(head, data) {

    var dt = {};
    dt.data = data;
    dt.next = head;
    return dt;

}