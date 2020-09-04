pragma solidity ^0.6.0;

contract Escrow{
    enum State { BEFORE_PAY, BEFORE_CONFIRM, DONE }
    
    State public currentState;
    address public participant;
    address payable public leader; 
    
    //mapping(address => uint)public deposit;
    
    modifier onlyParticipant() { 
        require(msg.sender == participant);
        _;
    }
    
    //for setting  value, add payable 
    constructor(address _participant, address payable _leader) payable public { 
        participant = _participant;
        leader = _leader;
    }
    
    function deposit() onlyParticipant external payable { //search difference external, public, private
        require(currentState == State.BEFORE_PAY); 
        currentState = State.BEFORE_CONFIRM; 
    }
    
    function confirm() onlyParticipant external payable{ 
        require(currentState == State.BEFORE_CONFIRM); 
        leader.transfer(address(this).balance); 
        currentState = State.DONE;
    }
    //To write refund function !!!
}