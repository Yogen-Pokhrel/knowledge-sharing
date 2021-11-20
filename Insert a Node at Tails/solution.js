function insertNodeAtTail(head, data) {
     
    var node = new SinglyLinkedListNode(data);
       if(head == null){
           head = node;         
       }else if(head.next == null){
        head.next = node;
       }else{
           insertNodeAtTail(head.next, data);
       }
       
    return head;

}
